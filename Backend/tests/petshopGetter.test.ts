import { petshopGetter } from '../src/server/controllers/petshopResponse';

describe('Testa o funcionamento da função petshopGetter', () => {
  let req: any;
  let res: any;

  beforeEach(() => {
    req = {
      body: {
        date: '2024-04-08', // Meio de semana
        smallPets: 1,
        bigPets: 2
      }
    };
    res = {
      status: jest.fn(() => res),
      json: jest.fn()
    };
  });

  it('Deve retornar o menor preço quando os três petshops têm preços diferentes', async () => {
    await petshopGetter(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ petshopName: 'Meu Canino Feliz', lowestPrice: 100 });
  });

  it('Deve retornar o petshop mais próximo quando dois petshops têm preços iguais', async () => {
    req.body.date = '2024-04-07'; // Mudando data para fim de semana
    await petshopGetter(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ petshopName: 'ChowChawgas', lowestPrice: 120 });
  });

  it('Deve lançar um erro quando uma data inválida é passada', async () => {
    req.body.date = '2024/13/40'; 
    await petshopGetter(req, res);
    
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Data inválida' });
  });
});
