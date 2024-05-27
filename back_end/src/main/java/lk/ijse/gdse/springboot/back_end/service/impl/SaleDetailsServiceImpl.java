package lk.ijse.gdse.springboot.back_end.service.impl;

import lk.ijse.gdse.springboot.back_end.dto.SaleDetailsDTO;
import lk.ijse.gdse.springboot.back_end.entity.SaleDetails;
import lk.ijse.gdse.springboot.back_end.repository.SaleDetailsRepo;
import lk.ijse.gdse.springboot.back_end.service.SaleDetailsService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class SaleDetailsServiceImpl implements SaleDetailsService {

    private ModelMapper modelMapper;
    private SaleDetailsRepo saleDetailsRepo;

    public SaleDetailsServiceImpl(ModelMapper modelMapper, SaleDetailsRepo saleDetailsRepo) {
        this.modelMapper = modelMapper;
        this.saleDetailsRepo = saleDetailsRepo;
    }

    @Override
    public List<SaleDetailsDTO> getAllSaleDetails() {
        return saleDetailsRepo.findAll().stream().map(saleDetails -> modelMapper.map(saleDetails,SaleDetailsDTO.class)).toList();
    }

    @Override
    public SaleDetailsDTO getSaleDetails(String id) {
        return modelMapper.map(saleDetailsRepo.findById(id).get(),SaleDetailsDTO.class);
    }

    @Override
    public void saveSaleDetails(SaleDetailsDTO saleDetailsDTO) {
        saleDetailsRepo.save(modelMapper.map(saleDetailsDTO, SaleDetails.class));
    }

    @Override
    public void deleteSaleDetails(String id) {
        saleDetailsRepo.deleteById(id);
    }

    @Override
    public SaleDetailsDTO getTopSale() {
        return modelMapper.map(saleDetailsRepo.findTopByOrderByItemCode(),SaleDetailsDTO.class);
    }

   /* @Override
    public List<SaleDetailsDTO> getAllRefundOrders() {
        return saleDetailsRepo.getAllRefundOrders().stream().map(saleDetails -> modelMapper.map(saleDetails,SaleDetailsDTO.class)).toList();
    }*/

}
