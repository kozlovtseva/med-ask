const DataAPI = {
//0 - ОМС; 1 - ДМС
    policies: [
      {
        number: '1234 12345678',
        type: 1, 
        expireDate: '14.08.2020',
        IC: {
            name: 'СК МЕД-АСКЕР',
            img: 'MedAsker_logo',
            tel: '8 (495) 123-45-67'
        }
      },
      {
        number: '9876 543210',
        type: 0, 
        expireDate: '15.08.2021',
        IC: {
            name: 'СК МЕД-АСКЕР',
            img: 'MedAsker_logo',
            tel: '8 (495) 123-45-67'
        }
      },
      {
        number: '1234-123456-78',
        type: 1, 
        expireDate: '16.08.2022',
        IC: {
            name: 'СК Рандеву',
            img: 'Randevu_logo',
            tel: '8 (499) 123-45-68'
        }
      },
      {
        number: '98-76 5432-10',
        type: 0, 
        expireDate: '24.11.2023',
        IC: {
            name: 'СК Рандеву',
            img: 'Randevu_logo',
            tel: '8 (499) 123-45-68'
        }
      },
      {
        number: '12-341234-5678',
        type: 1, 
        expireDate: '25.11.2024',
        IC: {
            name: 'Страх-трах',
            img: 'StrahTrah_logo',
            tel: '8 (812) 123-45-69'
        }
      },
      {
        number: '9876-543210',
        type: 0, 
        expireDate: '26.11.2025',
        IC: {
            name: 'Страх-трах',
            img: 'StrahTrah_logo',
            tel: '8 (812) 123-45-69'
        }
      }
    ],
    getPolicy(number) {
        const policy = this.policies.find(x => x.number === number);
        return policy;
    }
}
  
export default DataAPI;
  