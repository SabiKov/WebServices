package co.sabi11.toy.service;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;

import co.sabi11.toy.database.DatabaseClass;
import co.sabi11.toy.exception.DataNotFoundException;
import co.sabi11.toy.model.Toy;

public class ToyServices {
	
	private Map<Long, Toy> toys = DatabaseClass.getToys();
	
	/* Constructor initialize DB */
	public ToyServices() {
		toys.put(1L,  new Toy(1, "Football", "sport", "Addidas", "19.95", "20"));
		toys.put(2L,  new Toy(2, "Tennis Racket", "sport", "Addidas", "22.50", "18"));
		toys.put(3L,  new Toy(3, "Activity Center", "toddler", "Babyliss", "15.99", "46"));
		toys.put(4L,  new Toy(4, "Bubble Car", "toddler", "Babyliss", "78.99", "31"));
		toys.put(5L,  new Toy(5, "Cluedo", "board games", "Parker", "12.99", "28"));
		toys.put(6L,  new Toy(6, "Monopoly", "board games", "Parker", "14.99", "53"));
	}
	
	/* Return all available items from Virtual Database */
	public List<Toy> getAllToys() {
		return new ArrayList<Toy>(toys.values());
	}
	/* Return single item */
	public Toy getToy(Long id) {
		Toy toy = toys.get(id);
		if(toy == null) {
			throw new DataNotFoundException("Toy with id " + id + " not found");
		}
		return toy;
	}
	
	/* Add item into DB */
	public Toy addToy(Toy toy) {
		toy.setId(toys.size() + 1);
		toys.put(toy.getId(), toy);
		return toy;
	}
	
	/* Update particular item */
	public Toy updateToy(Toy toy) {
		if(toy.getId() <=0) {
			return null;
		}
		toys.put(toy.getId(), toy);
		return toy;
	}

	/* Remove item from DB */
	public Toy removeToy(long id) {
		return toys.remove(id);
	}

	/* Search item based on name */
	public List<Toy> getAllToyBasedOnName(String name) {
		List<Toy> toyBasedOnName = new ArrayList<>();
		String tempName;
		for(Toy toy : toys.values()) {
			tempName = toy.getName();
			if(name.equalsIgnoreCase(tempName)){
				toyBasedOnName.add(toy);
			}
		}
		if(toyBasedOnName.size() == 0) {
			throw new DataNotFoundException("Sorry, the " + name + " is not available in this store");
		}
		return toyBasedOnName;
	}
	
	/* Search item based on brand*/
	public List<Toy> getAllToyBasedOnBrand(String brand) {
		List<Toy> toyBasedOnBrand = new ArrayList<>();
		String tempBrand;
		for(Toy toy : toys.values()) {
			tempBrand = toy.getBrand();
			if(brand.equalsIgnoreCase(tempBrand)){
				toyBasedOnBrand.add(toy);
			}
		}
		if(toyBasedOnBrand.size() == 0) {
			throw new DataNotFoundException("Sorry, the " + brand + " is not available in this store");
		}
		return toyBasedOnBrand;
	}
	/* Search item based on category */
	public List<Toy> getAllToyBasedOnCategory(String cat) {
		List<Toy> toyBasedOnCategory = new ArrayList<>();
		String tempCat;
		for(Toy toy : toys.values()) {
			tempCat = toy.getCategory();
			if(cat.equalsIgnoreCase(tempCat)){
				toyBasedOnCategory.add(toy);
			}
		}
		if(toyBasedOnCategory.size() == 0) {
			throw new DataNotFoundException("Sorry, the " + cat + " is not available in this store");
		}
		return toyBasedOnCategory;
	}
	
	/* Search item between lower and upper price ranges */
	public List<Toy> getAlltoyBasedOnPriceInterval(String lowerValue, String upperValue) {
		List<Toy> toyBasedOnPriceInterval = new ArrayList<>();
		String tempPrice;
		
		double tempLowerInt = Double.parseDouble(lowerValue.trim());
		double tempUpperInt = Double.parseDouble(upperValue.trim());
		for(Toy toy : toys.values()) { 
			try {
					tempPrice = toy.getPrice();
					double tempPriceInt = Double.parseDouble(tempPrice.trim());
					if(tempPriceInt >= tempLowerInt && 
							tempPriceInt <= tempUpperInt) {
						toyBasedOnPriceInterval.add(toy);
					}
				} catch(NumberFormatException nfe) {
					System.out.println("NumberFormatException :" + nfe.getMessage());
			}
		}
		if(toyBasedOnPriceInterval.size() == 0) {
			throw new DataNotFoundException("Items are not found between " + tempLowerInt + " - " + tempUpperInt + " range.");
		}
		return toyBasedOnPriceInterval;
	}
}
