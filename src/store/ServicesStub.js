const ServicesAPI = {
        companies: [
          {
            id: 0,
            name: 'СК МЕД-АСКЕР',
            img: 'MedAsker_logo',
            tel: '8 (495) 123-45-67'
          },
          {
            id: 1,
            name: 'СК Рандеву',
            img: 'Randevu_logo',
            tel: '8 (499) 123-45-68'
          },
          {
            id: 2,
            name: 'Страх-трах',
            img: 'StrahTrah_logo',
            tel: '8 (812) 123-45-69'
          }
        ],
        getCompanies() {
            return this.companies;
        }
    }
      
    export default ServicesAPI;
      