// import java.util.Random;

// public class ShuffleArray {
//     public static void shuffleArray(int[] arr) {
//         int n = arr.length;
//         Random ran = new Random();
//         for (int i = n-1; i > 0; i--) {
//             int j = ran.nextInt(i + 1);
            
//             // Swap
//             int temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
//     public static void main(String[] args) {
//         int arr[]={1,2,3,4,5,6,7};
//         shuffleArray(arr);
//         for (int i = 0; i < arr.length; i++) {
//             System.out.print(arr[i]+" ");
//         }
//     }
// }

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ShuffleArray {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);
        list.add(7);
        Collections.shuffle(list);
        for (int i = 0; i < list.size(); i++) {
            System.out.print(list.get(i)+" ");
        }
    }
}