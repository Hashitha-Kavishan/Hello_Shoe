package lk.ijse.gdse.springboot.back_end.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "adminPanel")
public class AdminPanel {

    @Id
    private double totalSales;
    private double totalProfit;
    private String mostSaleItem;
    private String pictureOfTheMostSaleItem;
    private int mostSaleItemQty;

    public double getTotalSales() {
        return totalSales;
    }

    public void setTotalSales(double totalSales) {
        this.totalSales = totalSales;
    }

    public double getTotalProfit() {
        return totalProfit;
    }

    public void setTotalProfit(double totalProfit) {
        this.totalProfit = totalProfit;
    }

    public String getMostSaleItem() {
        return mostSaleItem;
    }

    public void setMostSaleItem(String mostSaleItem) {
        this.mostSaleItem = mostSaleItem;
    }

    public String getPictureOfTheMostSaleItem() {
        return pictureOfTheMostSaleItem;
    }

    public void setPictureOfTheMostSaleItem(String pictureOfTheMostSaleItem) {
        this.pictureOfTheMostSaleItem = pictureOfTheMostSaleItem;
    }

    public int getMostSaleItemQty() {
        return mostSaleItemQty;
    }

    public void setMostSaleItemQty(int mostSaleItemQty) {
        this.mostSaleItemQty = mostSaleItemQty;
    }

    @Override
    public String toString() {
        return "AdminPanel{" +
                "totalSales=" + totalSales +
                ", totalProfit=" + totalProfit +
                ", mostSaleItem='" + mostSaleItem + '\'' +
                ", pictureOfTheMostSaleItem='" + pictureOfTheMostSaleItem + '\'' +
                ", mostSaleItemQty=" + mostSaleItemQty +
                '}';
    }
}
