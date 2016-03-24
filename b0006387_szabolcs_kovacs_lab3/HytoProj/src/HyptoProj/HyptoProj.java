package HyptoProj;

import javax.jws.*;

@WebService
public class HyptoProj {

	public void constructor() {
		
	}
	
	public String claculateHypo(String num1, String num2) {
		
		int temp1 = Integer.parseInt(num1);
		int temp2 = Integer.parseInt(num2);
		int temp3;
		String num3;
		
		temp3 = (temp1 * temp1) + (temp2 * temp2);
		
		temp3 = calculateSQRT(temp3);
		
		num3 = Integer.toString(temp3);
		
		return num3;
	}

	private int calculateSQRT(int num) {
		// TODO Auto-generated method stub
		double rootValue = 1.00;
		double n = num;
		
		for(int i = 0; i < n; i++) {
			rootValue = 0.5 * (rootValue + n/rootValue);
		}
		
		int returnValue = (int)(rootValue * 1000);
		rootValue = returnValue;
		rootValue /= 1000;
		
		
		return (int) rootValue;
	}
}
