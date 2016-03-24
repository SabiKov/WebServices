package co.sabi11.toy.database;

import java.util.HashMap;
import java.util.Map;

import co.sabi11.toy.model.Toy;

public class DatabaseClass {
	
	private static Map<Long, Toy> toys = new HashMap<>();
	
	public static Map<Long, Toy> getToys() {
		return toys;
	}

}
