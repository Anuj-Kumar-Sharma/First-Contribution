#include <iostream>
#include <string.h>
#include <conio.h>

using namespace std;
 
class Cryptor
{
    public:
    void encryptor();
    void decryptor();

}c;



void Cryptor::encryptor()
{
    string raw;
    string mod, enct, encp;
    int i;

    cout<<"Enter the Raw text : \t\n";
    getline(cin>>ws, raw);
    int m = raw.length();
    for (i = 0; i < m; i++)
    {   if(raw[i] != ' ')
        {
            mod.push_back(raw[i]);
        }
        
    }
    
    int n = mod.length();
    
    for (i = 0; i < n; i++)
    {   if(i % 2 != 0 )
        {
            encp.push_back(mod[i]);
        }
        else 
        {
            enct.push_back(mod[i]);
        }
        
    }

    cout<<"Raw input is: "<<raw<<endl;
    //cout<<"Modified input is: "<<mod<<endl;
    cout<<"Encrypted message has: "<<"Sky Value: "<<encp<<' '<<"Ground Value: "<<enct<<endl;
    getch();

};

void Cryptor :: decryptor()
{
    string low, high;
    cout<<"Enter ground Value \n";
    getline(cin>>ws, low,'\n');
    cout<<"Enter sky value \n";
    getline(cin>>ws, high,'\n');

     string pt;
    int x= low.length();
    int y= high.length();

    int m = x + y;

    for(int j = 0; j<m; j++)
    {
        for(int k = j; k<=j; k++)
        {
            pt.push_back(low[k]);
        }
         for(int l = j; l<=j; l++)
        {
            pt.push_back(high[l]);
        }
    }

    cout<<"Plain text = "<<pt;
    getch();

}

int main () {
    Cryptor c;
   int ch;
   cout<<"1. Encrypt \n2. Dcrypt"<<endl;
   cout<<"Enter your Choice : ";
   cin>>ch;

   switch(ch) {
      case 1 :
          c.encryptor();
         break;
      case 2 : 
          c.decryptor();
        break;
      default :
         cout << "Invalid Choice" << endl;
   }

    getch();
   return 0;
}