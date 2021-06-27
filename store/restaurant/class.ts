import { IRestaurant } from '~/store/interfaces'

export class Restaurant implements IRestaurant {
  constructor () {
    this.id = 0
    this.name = 'Sans nom'
    this.type = 'Fastfood'
    this.timetable = {
      lundi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
      mardi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
      mercredi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
      jeudi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
      vendredi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
      samedi: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' },
      dimanche: { mStart: '10:00', mEnd: '15:00', aStart: '18:00', aEnd: '00:00' }
    }
    this.picture = 'LogoFoodzUp.png'
    this.address = '12 rue du 12 décembre 1212'
  }

  id: number
  name: string
  description?: string | undefined
  type: string
  picture?: string
  address: string
  timetable: {
    lundi: { mStart: string; mEnd: string; aStart: string; aEnd: string };
    mardi: { mStart: string; mEnd: string; aStart: string; aEnd: string };
    mercredi: { mStart: string; mEnd: string; aStart: string; aEnd: string };
    jeudi: { mStart: string; mEnd: string; aStart: string; aEnd: string };
    vendredi: { mStart: string; mEnd: string; aStart: string; aEnd: string };
    samedi: { mStart: string; mEnd: string; aStart: string; aEnd: string };
    dimanche: { mStart: string; mEnd: string; aStart: string; aEnd: string };
  }
}
