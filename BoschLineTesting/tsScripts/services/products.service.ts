import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { User } from "../models/user.model";

@Injectable()
export class ProductsService {
  private productsSource = new Subject<User>();
  
//   userSource$ = this.userSource.asObservable();
//   constructor() {
//       this.dataChange = new Observable((observer: Observer)) {
//           this.dataChangeObserver = observer;
//       }
//    }
    // userChanged(usr: User) {
    //     this.userSource.next(usr);
    // }

    getProducts() {
      // http.get('/api/products/')
      // .then( (res) => {
      //   return res.data;
      // })
      return [{
        "id": 1,
        "name": "TriNessa",
        "number": "76-3560528",
        "lineID": "21695-407"
      }, {
        "id": 2,
        "name": "Balancing Dynamics Kit",
        "number": "84-2194368",
        "lineID": "68828-154"
      }, {
        "id": 3,
        "name": "ATORVASTATIN CALCIUM",
        "number": "63-9712778",
        "lineID": "59762-0156"
      }, {
        "id": 4,
        "name": "Motion Sickness Relief",
        "number": "46-1116373",
        "lineID": "41163-304"
      }, {
        "id": 5,
        "name": "Cephalexin",
        "number": "39-6115440",
        "lineID": "68180-121"
      }, {
        "id": 6,
        "name": "Bullfrog Surfer",
        "number": "80-9212811",
        "lineID": "41167-3301"
      }, {
        "id": 7,
        "name": "KALI PHOSPHORICUM",
        "number": "30-7904319",
        "lineID": "60512-8022"
      }, {
        "id": 8,
        "name": "ACULAR LS",
        "number": "37-9035801",
        "lineID": "0023-9277"
      }, {
        "id": 9,
        "name": "Dior Snow Light Veil 010 Ivory SPF 20",
        "number": "20-3649509",
        "lineID": "61957-1710"
      }, {
        "id": 10,
        "name": "Fosrenol",
        "number": "29-6975711",
        "lineID": "54092-256"
      }, {
        "id": 11,
        "name": "MVC-Fluoride",
        "number": "26-0160972",
        "lineID": "44946-1022"
      }, {
        "id": 12,
        "name": "OP-P",
        "number": "49-6801687",
        "lineID": "64616-100"
      }, {
        "id": 13,
        "name": "ATOMY MINERAL PACT",
        "number": "50-5700035",
        "lineID": "52257-1205"
      }, {
        "id": 14,
        "name": "Progesterone",
        "number": "14-8343799",
        "lineID": "0093-5353"
      }, {
        "id": 15,
        "name": "Ampicillin",
        "number": "48-8472123",
        "lineID": "55150-115"
      }, {
        "id": 16,
        "name": "Terazosin Hydrochloride",
        "number": "85-4119137",
        "lineID": "0904-6127"
      }, {
        "id": 17,
        "name": "Potassium Phosphates",
        "number": "22-4512573",
        "lineID": "63323-086"
      }, {
        "id": 18,
        "name": "Amoxicillin and Clavulanate Potassium",
        "number": "41-6738640",
        "lineID": "0781-6139"
      }, {
        "id": 19,
        "name": "DIGOX",
        "number": "66-3777083",
        "lineID": "53217-005"
      }, {
        "id": 20,
        "name": "Childrens Plus Cough and Sore Throat",
        "number": "95-6515602",
        "lineID": "63941-124"
      }, {
        "id": 21,
        "name": "Treatment Set TS331258",
        "number": "79-2470607",
        "lineID": "49288-0749"
      }, {
        "id": 22,
        "name": "CYCLOBENZAPRINE HYROCHLORIDE",
        "number": "67-2377924",
        "lineID": "35356-765"
      }, {
        "id": 23,
        "name": "Clarins Sunscreen Care Milk- SPF 50 Plus",
        "number": "71-4440663",
        "lineID": "58668-4541"
      }, {
        "id": 24,
        "name": "Glycerin Liquid Laxative Enema(Kaisalilu)",
        "number": "81-7762901",
        "lineID": "51367-009"
      }, {
        "id": 25,
        "name": "WET ONES",
        "number": "22-0724009",
        "lineID": "63354-999"
      }, {
        "id": 26,
        "name": "Pure Finish Mineral Powder Foundation SPF 20 Pure Finish 3",
        "number": "50-0344364",
        "lineID": "67938-1392"
      }, {
        "id": 27,
        "name": "headache formula",
        "number": "25-8576995",
        "lineID": "41250-430"
      }, {
        "id": 28,
        "name": "Anastrozole",
        "number": "75-2529008",
        "lineID": "16571-421"
      }, {
        "id": 29,
        "name": "Modafinil",
        "number": "23-6527898",
        "lineID": "68084-621"
      }, {
        "id": 30,
        "name": "Hydrocodone Bitartrate and Ibuprofen",
        "number": "82-0872234",
        "lineID": "68084-841"
      }, {
        "id": 31,
        "name": "sleep aid",
        "number": "10-2206863",
        "lineID": "49614-146"
      }, {
        "id": 32,
        "name": "LEVOXYL",
        "number": "04-4105857",
        "lineID": "54868-3849"
      }, {
        "id": 33,
        "name": "ABILIFY",
        "number": "64-4566226",
        "lineID": "24236-792"
      }, {
        "id": 34,
        "name": "Oxycodone and Acetaminophen",
        "number": "67-9559519",
        "lineID": "55289-951"
      }, {
        "id": 35,
        "name": "Levetiracetam",
        "number": "29-5480436",
        "lineID": "0904-6052"
      }, {
        "id": 36,
        "name": "Sodium Chloride",
        "number": "43-2775599",
        "lineID": "54868-4464"
      }, {
        "id": 37,
        "name": "Simvastatin",
        "number": "25-8815536",
        "lineID": "42571-020"
      }, {
        "id": 38,
        "name": "Asparagus",
        "number": "06-6755490",
        "lineID": "36987-1387"
      }, {
        "id": 39,
        "name": "SHISEIDO SHEER AND PERFECT COMPACT (REFILL)",
        "number": "12-6336402",
        "lineID": "58411-216"
      }, {
        "id": 40,
        "name": "Amlodipine Besylate",
        "number": "87-8026508",
        "lineID": "43353-684"
      }, {
        "id": 41,
        "name": "Patricia Wexler Skin Brightening Daily Moisturizer with Sunscreen Broad Spectrum SPF 28",
        "number": "12-7352481",
        "lineID": "62670-8042"
      }, {
        "id": 42,
        "name": "Amlobenz",
        "number": "41-0336095",
        "lineID": "21695-866"
      }, {
        "id": 43,
        "name": "Goodsense Oral Pain Relief",
        "number": "46-9045886",
        "lineID": "50804-191"
      }, {
        "id": 44,
        "name": "Melaleuca Pollen",
        "number": "44-8372044",
        "lineID": "36987-2786"
      }, {
        "id": 45,
        "name": "Oxygen",
        "number": "79-0439609",
        "lineID": "24846-0001"
      }, {
        "id": 46,
        "name": "AOGel",
        "number": "82-0731743",
        "lineID": "54312-275"
      }, {
        "id": 47,
        "name": "ANTIBACTERIAL HAND SOAP",
        "number": "75-4088148",
        "lineID": "37808-720"
      }, {
        "id": 48,
        "name": "Metal-Chord",
        "number": "92-6219613",
        "lineID": "64578-0068"
      }, {
        "id": 49,
        "name": "Secret Clinical Strength Stress Response",
        "number": "79-5998407",
        "lineID": "37000-307"
      }, {
        "id": 50,
        "name": "Synthroid",
        "number": "62-0064173",
        "lineID": "67544-886"
      }, {
        "id": 51,
        "name": "Extra Strength Pain Relief",
        "number": "06-9746860",
        "lineID": "41163-751"
      }, {
        "id": 52,
        "name": "Members mark cetirizine",
        "number": "22-1273699",
        "lineID": "68196-458"
      }, {
        "id": 53,
        "name": "Thiothixene",
        "number": "56-3014069",
        "lineID": "21695-161"
      }, {
        "id": 54,
        "name": "Benztropine Mesylate",
        "number": "05-6276194",
        "lineID": "52125-169"
      }, {
        "id": 55,
        "name": "Extra Strength Headache Relief",
        "number": "00-7867567",
        "lineID": "57243-159"
      }, {
        "id": 56,
        "name": "TYLENOL",
        "number": "46-1480492",
        "lineID": "50580-496"
      }, {
        "id": 57,
        "name": "smart sense feminine",
        "number": "85-6910850",
        "lineID": "49738-110"
      }, {
        "id": 58,
        "name": "AGARICUS MUSCARIUS",
        "number": "27-6186264",
        "lineID": "60512-6455"
      }, {
        "id": 59,
        "name": "Hay Fever",
        "number": "29-7031422",
        "lineID": "59667-0032"
      }, {
        "id": 60,
        "name": "Sunmark athletes foot powder",
        "number": "18-9038667",
        "lineID": "49348-682"
      }, {
        "id": 61,
        "name": "Ribavirin",
        "number": "24-1795460",
        "lineID": "65862-207"
      }, {
        "id": 62,
        "name": "Skintegrity Antibacterial Hand",
        "number": "31-3890571",
        "lineID": "53329-018"
      }, {
        "id": 63,
        "name": "TUSSIN COUGH",
        "number": "87-4910478",
        "lineID": "57243-503"
      }, {
        "id": 64,
        "name": "Laxative Pills Maximum Strength",
        "number": "32-9117724",
        "lineID": "59779-348"
      }, {
        "id": 65,
        "name": "Nitrogen",
        "number": "80-4615989",
        "lineID": "63961-200"
      }, {
        "id": 66,
        "name": "Lollicaine Bubble Gum",
        "number": "53-2119804",
        "lineID": "60640-3688"
      }, {
        "id": 67,
        "name": "Metoprolol Tartrate",
        "number": "23-7217315",
        "lineID": "67544-911"
      }, {
        "id": 68,
        "name": "Neutrogena Pure and Free Baby",
        "number": "52-5044188",
        "lineID": "10812-324"
      }, {
        "id": 69,
        "name": "Roll On Anti Perspirant",
        "number": "75-2449358",
        "lineID": "53329-069"
      }, {
        "id": 70,
        "name": "Metoprolol Tartrate",
        "number": "55-9158720",
        "lineID": "53808-0382"
      }, {
        "id": 71,
        "name": "Mycogone perniciosa",
        "number": "12-9706349",
        "lineID": "49288-0297"
      }, {
        "id": 72,
        "name": "Nicotine Polacrilex",
        "number": "14-1722834",
        "lineID": "45802-001"
      }, {
        "id": 73,
        "name": "CAVIA PORCELLUS SKIN",
        "number": "53-4708205",
        "lineID": "0268-0655"
      }, {
        "id": 74,
        "name": "Labetalol HCl",
        "number": "38-1036382",
        "lineID": "0185-0118"
      }, {
        "id": 75,
        "name": "Rapamune",
        "number": "71-8449274",
        "lineID": "0008-1030"
      }, {
        "id": 76,
        "name": "Pleo Ut",
        "number": "91-8315566",
        "lineID": "60681-5304"
      }, {
        "id": 77,
        "name": "PULSATILLA NIG",
        "number": "05-6872686",
        "lineID": "54973-2923"
      }, {
        "id": 78,
        "name": "Levothyroxine sodium",
        "number": "62-0075390",
        "lineID": "63629-1837"
      }, {
        "id": 79,
        "name": "Benazepril hydrochloride and hydrochlorothiazide",
        "number": "60-5860135",
        "lineID": "63304-157"
      }, {
        "id": 80,
        "name": "Gelato APF",
        "number": "19-0421513",
        "lineID": "68400-135"
      }, {
        "id": 81,
        "name": "Banana Boat",
        "number": "89-9088357",
        "lineID": "63354-041"
      }, {
        "id": 82,
        "name": "Aloquin",
        "number": "87-0088191",
        "lineID": "68040-706"
      }, {
        "id": 83,
        "name": "DIVALPROEX SODIUM",
        "number": "74-2127084",
        "lineID": "64679-724"
      }, {
        "id": 84,
        "name": "Naproxen",
        "number": "60-1717751",
        "lineID": "53808-0738"
      }, {
        "id": 85,
        "name": "CENTER-AL - RUMEX ACETOSELLA POLLEN",
        "number": "21-3806994",
        "lineID": "0268-0063"
      }, {
        "id": 86,
        "name": "Inflammation Therapy",
        "number": "84-1608813",
        "lineID": "58666-3121"
      }, {
        "id": 87,
        "name": "Acetaminophen",
        "number": "70-7846973",
        "lineID": "59779-350"
      }, {
        "id": 88,
        "name": "Fresh Soy Moisturizing SPF 20",
        "number": "39-1954597",
        "lineID": "42406-100"
      }, {
        "id": 89,
        "name": "Naproxen",
        "number": "21-5375069",
        "lineID": "21695-085"
      }, {
        "id": 90,
        "name": "Gas Relief",
        "number": "16-9200860",
        "lineID": "53187-242"
      }, {
        "id": 91,
        "name": "nicotine",
        "number": "59-3176151",
        "lineID": "59779-190"
      }, {
        "id": 92,
        "name": "Zaleplon",
        "number": "76-4578308",
        "lineID": "0093-5268"
      }, {
        "id": 93,
        "name": "TRAMADOL HYDROCHLORIDE",
        "number": "68-3476040",
        "lineID": "10147-0901"
      }, {
        "id": 94,
        "name": "Acetaminophen",
        "number": "04-0833397",
        "lineID": "62211-011"
      }, {
        "id": 95,
        "name": "ASACOL",
        "number": "40-2538920",
        "lineID": "55154-8607"
      }, {
        "id": 96,
        "name": "FENTANYL CITRATE",
        "number": "26-8229791",
        "lineID": "0406-9208"
      }, {
        "id": 97,
        "name": "Lavender Sap Patch",
        "number": "41-7007196",
        "lineID": "34690-6001"
      }, {
        "id": 98,
        "name": "HAHNEMANN COLDS",
        "number": "94-2880091",
        "lineID": "63545-644"
      }, {
        "id": 99,
        "name": "Omeprazole",
        "number": "55-3457693",
        "lineID": "50268-620"
      }, {
        "id": 100,
        "name": "Black Locust",
        "number": "82-7488637",
        "lineID": "36987-2739"
      }];
    }
}