package MinProj;

import javax.jws.WebService;

@WebService
public class MinProj {

	public void constructor(){
		
	}
	
	public String minNumber(String num1, String num2, String num3) {
		
		int temp1 = Integer.parseInt(num1);
		int temp2 = Integer.parseInt(num2);
		int temp3 = Integer.parseInt(num3);
		
		if(temp1 < temp2 && temp1 < temp3) {
			return "The smallest number is the first value " + num1;
		}
		else if(temp2 < temp1 && temp2 < temp3) {
			return "The smallest number is the second value " + num2;
		}
		else {
			return "The smallest number is the third value " + num3;
		}
		
	}
}
