export interface IRestaurant {
    id: number
    name: string
    description?: string
    type: string
    timetable: {
        lundi: { mStart: string, mEnd: string, aStart: string, aEnd: string },
        mardi: { mStart: string, mEnd: string, aStart: string, aEnd: string },
        mercredi: { mStart: string, mEnd: string, aStart: string, aEnd: string },
        jeudi: { mStart: string, mEnd: string, aStart: string, aEnd: string },
        vendredi: { mStart: string, mEnd: string, aStart: string, aEnd: string },
        samedi: { mStart: string, mEnd: string, aStart: string, aEnd: string },
        dimanche: { mStart: string, mEnd: string, aStart: string, aEnd: string }
    },
    picture?: string
    address: string
}
