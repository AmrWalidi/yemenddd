main(){
      int i,N,min,max,ort,toplam=0;                
printf("Girilen sayilar adeti giriniz: ");        
scanf("%d",&N);                                         
int *p=(int*)malloc(sizeof(int)*N);              
for(i=0;i<N;i++){                                                                               
	printf("%d.sayi gir: ",i+1);
	scanf("%d",p+i);
}
min=*p;                                            
max=*p;                                    
     for(i=0;i<N;i++){                                                       
	if(*(p+i)<min){                                 
	    min=*(p+i);
	}
    else if (*(p+i)>max){
    	max=*(p+i);
	}
            toplam=toplam+*(p+i);
}
ort=toplam/N;                                   
printf("Girilen sayilardan en buyuk sayi=%d\nEn kucuk sayi=%d\nGirilen sayilarin ortalamasi=%d",max,min,ort);
}


