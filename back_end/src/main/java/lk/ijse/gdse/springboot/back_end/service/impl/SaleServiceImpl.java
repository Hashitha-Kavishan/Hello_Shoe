package lk.ijse.gdse.springboot.back_end.service.impl;

import jakarta.transaction.Transactional;
import lk.ijse.gdse.springboot.back_end.dto.CustomerDTO;
import lk.ijse.gdse.springboot.back_end.dto.InventoryDTO;
import lk.ijse.gdse.springboot.back_end.dto.SaleDTO;
import lk.ijse.gdse.springboot.back_end.dto.SaleDetailsDTO;
import lk.ijse.gdse.springboot.back_end.entity.Customer;
import lk.ijse.gdse.springboot.back_end.entity.Inventory;
import lk.ijse.gdse.springboot.back_end.entity.Sale;
import lk.ijse.gdse.springboot.back_end.entity.SaleDetails;
import lk.ijse.gdse.springboot.back_end.repository.CustomerRepo;
import lk.ijse.gdse.springboot.back_end.repository.InventoryRepo;
import lk.ijse.gdse.springboot.back_end.repository.SaleDetailsRepo;
import lk.ijse.gdse.springboot.back_end.repository.SaleRepo;
import lk.ijse.gdse.springboot.back_end.service.SaleService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleServiceImpl implements SaleService {

    private ModelMapper modelMapper;
    private SaleRepo saleRepo;
    private CustomerRepo customerRepo;
    private InventoryRepo inventoryRepo;
    private SaleDetailsRepo saleDetailsRepo;

    public SaleServiceImpl(ModelMapper modelMapper, SaleRepo saleRepo, CustomerRepo customerRepo, InventoryRepo inventoryRepo, SaleDetailsRepo saleDetailsRepo) {
        this.modelMapper = modelMapper;
        this.saleRepo = saleRepo;
        this.customerRepo = customerRepo;
        this.inventoryRepo = inventoryRepo;
        this.saleDetailsRepo = saleDetailsRepo;
    }

    @Override
    public List<SaleDTO> getAllSaleDetails() {
        return saleRepo.findAll().stream().map(sale -> modelMapper.map(sale,SaleDTO.class)).toList();
    }

    @Override
    @Transactional
    public void saveSale(SaleDTO saleDTO) {
        SaleDTO saleDTO1=new SaleDTO(saleDTO.getOrderNo(),saleDTO.getCustomerCode(),saleDTO.getCustomerName(),saleDTO.getTotalPrice(),saleDTO.getPurchaseDate(),saleDTO.getPaymentMethod(),saleDTO.getAddedPoints(),saleDTO.getCashierName(),saleDTO.getEmployeeCode());
        saleRepo.save(modelMapper.map(saleDTO1, Sale.class));

        for (SaleDetailsDTO detailsDTO:saleDTO.getSaleDetails()) {
            saleDetailsRepo.save(modelMapper.map(detailsDTO, SaleDetails.class));

            if(detailsDTO.getSize()==5){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                int qty=inventoryDTO.getQuantitySize5()-detailsDTO.getQuantity();
                inventoryDTO.setQuantitySize5(qty);
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==6){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                int qty=inventoryDTO.getQuantitySize6()-detailsDTO.getQuantity();
                inventoryDTO.setQuantitySize6(qty);
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==7){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                int qty=inventoryDTO.getQuantitySize7()-detailsDTO.getQuantity();
                inventoryDTO.setQuantitySize7(qty);
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==8){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                int qty=inventoryDTO.getQuantitySize8()-detailsDTO.getQuantity();
                inventoryDTO.setQuantitySize8(qty);
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==9){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                int qty=inventoryDTO.getQuantitySize9()-detailsDTO.getQuantity();
                inventoryDTO.setQuantitySize9(qty);
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==10){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                int qty=inventoryDTO.getQuantitySize10()-detailsDTO.getQuantity();
                inventoryDTO.setQuantitySize10(qty);
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==11){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                int qty=inventoryDTO.getQuantitySize11()-detailsDTO.getQuantity();
                inventoryDTO.setQuantitySize11(qty);
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
        }
        CustomerDTO customerDTO=modelMapper.map(customerRepo.findById(saleDTO.getCustomerCode()).get(), CustomerDTO.class);
        int point=customerDTO.getTotalPoint()+saleDTO.getAddedPoints();
        customerDTO.setTotalPoint(point);
        customerDTO.setRecentPurchaseDate(saleDTO.getPurchaseDate());
        System.out.println(saleDTO.getPurchaseDate());
        customerRepo.save(modelMapper.map(customerDTO, Customer.class));
    }

    @Override
    public String getNextId() {
        /*List<SaleDTO> detailsDTOS=saleRepo.findTopByOrderByOrderNo().stream().map(sale -> modelMapper.map(sale,SaleDTO.class)).toList();
        for (SaleDTO detail:detailsDTOS) {
            return splitId(detail.getOrderNo());
        }
        return splitId(null);*/
        return null;
    }

    @Override
    public String splitId(String id) {
        if(id != null) {
            String[] strings = id.split("OR00-00");
            int ids = Integer.parseInt(strings[1]);
            if(ids==9){
                String[] strings2 = id.split("OR00-0");
                int ids2 = Integer.parseInt(strings2[1]);
                if(ids2==99){
                    String[] strings3 = id.split("OR00-");
                    int ids3 = Integer.parseInt(strings2[1]);
                    ids3++;
                    return "OR00-" + ids3;
                }
                ids2++;
                return "OR00-0" + ids2;
            }
            ids++;
            return "OR00-00" + ids;
        }
        return "OR00-001";
    }

    @Override
    public void updateSale(SaleDTO saleDTO) {
        saleRepo.save(modelMapper.map(saleDTO, Sale.class));
    }

    @Override
    public void deleteSale(String id) {
        saleRepo.deleteById(id);
    }

    @Override
    public List<SaleDTO> getAllRefundOrders() {
        return saleRepo.getAllRefundOrders().stream().map(sale -> modelMapper.map(sale,SaleDTO.class)).toList();
    }
}
