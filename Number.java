
public class Number {
	
	int [] count = new int [255];
	
	public char findChar (String s) {
		for (char c : s.toCharArray()) {
			count[c]++;	
		}
		for (char c: s.toCharArray()) {
			if (count[c]==1)
				return c;
		}
		return '\0';
	}
	
	public String reverse (String s) {
		String [] sArray = s.split(" ");
		StringBuilder revString = new StringBuilder ();
		
		for (int i=0; i<sArray.length; i++) {
			StringBuilder rev = new StringBuilder (sArray[i]);
			rev.reverse();
			revString.append(rev).append(" ");
		}
		return revString.toString().trim();
	}
	
	public int countDuplicates(String s) {
		String [] sArray = s.split(" ");
		int count =0;
		
		for (int i=0; i<sArray.length; i++) {
			for (int j=i+1; j<sArray.length; j++) {
				if (sArray[i].equalsIgnoreCase(sArray[j])) {
					count++;
					
				}
			}
		}
		return count;
	}
	
	public boolean countOccurrences(String s) {
		int [] count = new int [255];
		for(char c: s.toCharArray()) {
			count[c]++;
		}
		for (int i=0; i<count.length; i++) {
			if(count[i]>0) {
				char charac = (char) i;
				System.out.println(charac + " " + count[i]);
			}
		}
		
		return false;
	}
	
	public String check (String s){
		
		for (char c: s.toCharArray()) {
			if(Character.isLetter(c)) {
				return  "all are letter";
			}
			else if (Character.isDigit(c)){
				return "all are numbers";
			}
			
		}
		return "neither";
	}
	
	public String swap (String s1, String s2) {
		String str = s1+s2;
		s1 = str.substring(s2.length());
		s2 = str.substring(0, s1.length() - s2.length());
		return "After swap the value of s1 and s2 are" + "s1 =" + s1 + "s2 =" + s2;
	}
	
	public String [] merge(String [] a1, String [] a2) {
		String [] a3 = new String [a1.length+a2.length];
		for (int i=0; i< a1.length; i++) {
			a3[i]= a1[i];
		}
		for (int j= 0;j<a2.length;j++){
			a3[a1.length] = a2[0];
		}
		
		return a3;
		
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Number nRC = new Number();
		System.out.println(nRC.findChar("Hello"));
		System.out.println(nRC.reverse("Hello WORLD!"));
		System.out.println(nRC.countDuplicates("Hello world hello World Hely"));
		System.out.println(nRC.countOccurrences("GauriKumari"));
		System.out.println(nRC.check("GauriKumari"));
		System.out.println(nRC.check("12345"));
		System.out.println(nRC.check("GauriKumari12345"));
		//System.out.println(nRC.swap("Gauri", "Kumari"));
		//System.out.println(nRC.merge({"Gauri", "Kumari"}, {"Kumari", "Gauri"}));
	}

}
