package co.sabi11.toy.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Toy {
	
    private long id;
    private String name;
    private String category;
    private String brand;
    private String price;
    private String quantity;
	
    //Default Constructor
    public Toy() {}
    
    public Toy(long id, String name, String category, String brand, String price, String quantity) {
		this.id = id;
		this.name = name;
		this.category = category;
		this.brand = brand;
		this.price = price;
		this.quantity = quantity;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

}
