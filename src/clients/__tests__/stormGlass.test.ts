import { StormGlass } from '@src/clients/stormGlass';

describe('StormGlass client', ()=>{
    it('should return normalized data forecast from StomrGlass service', async ()=> {
        const lat=-33.792726;
        const lng=151.289824

        const stormGlass = new StormGlass();
        const reponse = await stormGlass.fetchPoints(lat, lng);
        expect(reponse).toEqual({});
    })
})