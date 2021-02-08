
export const telKaydiEkle = (yeniKayit) => {
    return {
        type: 'TEL_EKLE',
        payload: yeniKayit
    }
}

export const telKaydiSil = (id) => {
    return {
        type: 'TEL_SIL',
        payload: id
    }
}