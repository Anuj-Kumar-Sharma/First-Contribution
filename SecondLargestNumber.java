// Solution class to implement function largestAndSecondLargest
class Solution{
    
    // Function to find largest and second largest element in the array
    public static ArrayList<Integer> largestAndSecondLargest(int sizeOfArray, int arr[])
    {
        ArrayList<Integer> al = new ArrayList<>();
        
        int secondLargest = -1, largest = 0;
        for(int i=1; i<sizeOfArray; i++){
            // update largest to i if i is greater than largest and secondLargest 
            // to largest since previous largest has now become secondLargest
            if(arr[i] > arr[largest]){
                secondLargest = largest;
                largest = i;
            }
            // ignore if two numbers are same and less
            else if(arr[i] != arr[largest]){
                // update secondLargest to i if i is greater than secondLargest
                if(secondLargest == -1 || arr[i] > arr[secondLargest]){
                    secondLargest = i;
                }
            }
        }
        // now add the largest in array list
        al.add(arr[largest]);
        // return -1 if secondLargest does not exist
        if(secondLargest == -1){
            al.add(-1);
        }else{
            al.add(arr[secondLargest]);
        }
        // then return the array list
        return al;
    }
}
