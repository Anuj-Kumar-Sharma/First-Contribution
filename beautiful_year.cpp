#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin>>n;
    int x;
    while(x<=9000)
    {
        x = ++n;
        int flag=0;
        vector<int> v;
        //int y = x;
        while(x>0)
        {
            v.push_back(x%10);
            x /= 10;
        }
        sort(v.begin(), v.end());
        for(int i=0; i<v.size()-1; ++i)
        {
            if(v[i]==v[i+1])
            {
                flag=1;
                break;
            }
        }
        if(flag==0)
        {
            cout<<n<<endl;
            break;
        }
    }
}
