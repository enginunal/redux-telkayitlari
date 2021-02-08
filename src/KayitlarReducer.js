let sonID = 0;

const KayitlarReducer = (state = [], action) => {
    switch (action.type) {
        case 'TEL_EKLE':

            return [...state,
                { 
                    id: ++sonID,
                    adSoyad: action.payload.adSoyad, 
                    telNo: action.payload.telNo
                }
                ];

        case 'TEL_SIL':        
            return state.filter(kayit => kayit.id !== action.payload.id);
        
        default:
            return state
    }
}

export default KayitlarReducer;