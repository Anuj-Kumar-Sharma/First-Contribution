class SwappingUsingTemp{
	public static void main(String[] args)
	{
		int a=5,b=8,temp=0;
		
		System.out.println("-------- Swapping of Two Numbers --------------");
		System.out.println("Before swapping :  ");
		System.out.println("a : "+a+", b : "+b);
		
		temp=a;
		a=b;
		b=temp;
		
		System.out.println("after swapping : ");
		System.out.println("a : "+a+", b : "+b);
		
	}
}	