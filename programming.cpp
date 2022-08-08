#include<bits/stdc++.h>
using namespace std;

bool solve(string s)
{
    int ct=1;
    for(int i=1; i<s.length(); i++)
    {
        if(s[i]==s[i-1])
        {
            ct++;
            if(ct==7)
            return 1;
        }
        else{
            ct=1;
        }
    }

    return 0;
}

int main()
{
    string s;
    cin>>s;
    if(solve(s))
    cout<<"YES\n";
    else
    cout<<"NO\n";
}
