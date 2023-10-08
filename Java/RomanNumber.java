import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class RomanNumber {
    public static int romanToInteger(String roman) {
        Map<Character, Integer> romanMap = new HashMap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);

        int total = 0;
        int prevValue = 0;
        for (int i = roman.length() - 1; i >= 0; i--) {
            int currValue = romanMap.get(roman.charAt(i));
            if (currValue >= prevValue) {
                total += currValue;
            } else {
                total -= currValue;
            }
            prevValue = currValue;
        }
        return total;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a Roman Number: ");
        String roman = sc.nextLine();
        int result = romanToInteger(roman);
        System.out.println(result);
    }
}
