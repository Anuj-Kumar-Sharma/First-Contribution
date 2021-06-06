#include <iostream>
using namespace std;
class Flipcart
{

public:
    int id=1234;
};
class Grocery : public Flipcart
{
    public:
    int price=20000;
};

int main()
{
Grocery g1;
cout<<"id :- "<<g1.id<<endl;
cout<<"price :- "<<g1.price<<endl;

    return 0;
}
