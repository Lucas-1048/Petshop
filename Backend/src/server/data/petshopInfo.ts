export interface IPetshop {
    name: string;
    weekdays: {
        smallDogPrice: number;
        bigDogPrice: number;
    };
    weekends: {
        smallDogPrice: number;
        bigDogPrice: number;
    };
}

export const petshops: IPetshop[] = [
    {
        name: "Meu Canino Feliz",
        weekdays: {
            smallDogPrice: 20,
            bigDogPrice: 40
        },
        weekends: {
            smallDogPrice: 20 * 1.2,
            bigDogPrice: 40 * 1.2
        }
    },
    {
        name: "Vai Rex",
        weekdays: {
            smallDogPrice: 15,
            bigDogPrice: 50
        },
        weekends: {
            smallDogPrice: 20,
            bigDogPrice: 55
        }
    },
    {
        name: "ChowChawgas",
        weekdays: {
            smallDogPrice: 30,
            bigDogPrice: 45
        },
        weekends: {
            smallDogPrice: 30,
            bigDogPrice: 45
        }
    }
];
