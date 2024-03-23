import java.io.*;
import java.util.*;

public class Main {



    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        Scanner sc = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();
        int ans=0;
        int g = sc.nextInt();
        int s = sc.nextInt();
        String W = sc.nextLine();
        String S = sc.nextLine();
        int[] WCheck = new int[128];
        int[] SCheck = new int[128];
        for (int i = 0; i < g; i++) {
            WCheck[W.charAt(i)]++;
            SCheck[S.charAt(i)]++;
        }
        if(Arrays.equals(WCheck,SCheck)) ans++;
        for (int i = g; i < s; i++) {
            SCheck[S.charAt(i)]++;
            SCheck[S.charAt(i-g)]--;
            if(Arrays.equals(WCheck,SCheck)) ans++;
        }
        System.out.println(ans);
    }
}
