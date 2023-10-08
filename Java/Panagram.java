import java.util.HashSet;

public class Panagram {
    public static boolean isPanagram(String sentence) {
        HashSet<Character> set = new HashSet<>();
        for (int i = 0; i < sentence.length(); i++) {
            set.add(sentence.charAt(i));
        }
        if (set.size() == 26) {
            return true;
        }
        return false;
    }
    public static void main(String[] args) {
        String sentence = "thequickbrownfoxjumpsoverthelazydog";
        boolean result = isPanagram(sentence);
        System.out.println(result);
    }
}
