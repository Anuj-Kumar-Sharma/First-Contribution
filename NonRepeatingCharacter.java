import java.util.*;
public class NonRepeatingCharacter {
    public static void main(String[] args) {
        String s="aabcbc";
        int count[]=new int[26];
        StringBuilder sb=new StringBuilder();
        Queue<Character> q=new LinkedList<>();
        for(int i=0;i<s.length();i++){
            char ch=s.charAt(i);
            q.add(ch);
            count[ch-'a']++;
            while(!q.isEmpty()){
                if(count[q.peek()-'a']>1){
                    q.remove();
                }else{
                    sb.append(q.peek());
                    break;
                }
            }
            if(q.isEmpty()){
                sb.append('#');
            }
        }
        System.out.println("Output is "+sb.toString());
    }
}
