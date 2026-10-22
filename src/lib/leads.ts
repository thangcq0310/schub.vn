import { addDoc, collection, getDocs, serverTimestamp, Timestamp } from "firebase/firestore/lite"
import { db, isDemoMode } from "./firebase"

// Field sets must match isValidLead() in firestore.rules
export type LeadInput =
  | { source: "checklist"; name: string; email: string; company: string; role: string }
  | {
      source: "services"
      name: string
      email: string
      phone: string
      company: string
      serviceType: string
      message: string
    }

export interface Lead {
  id: string
  source: LeadInput["source"]
  name: string
  email: string
  phone?: string
  company?: string
  role?: string
  serviceType?: string
  message?: string
  createdAt: number
}

const COLLECTION = "leads"

/** Saves a form submission. Anyone can write, only the admin can read them back. */
export async function submitLead(lead: LeadInput): Promise<void> {
  if (isDemoMode) throw new Error("Firebase is not configured")
  await addDoc(collection(db, COLLECTION), { ...lead, createdAt: serverTimestamp() })
}

export async function getLeads(): Promise<Lead[]> {
  const snapshot = await getDocs(collection(db, COLLECTION))
  return snapshot.docs
    .map((d) => {
      const data = d.data()
      return {
        ...(data as Omit<Lead, "id" | "createdAt">),
        id: d.id,
        createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toMillis() : 0,
      }
    })
    .sort((a, b) => b.createdAt - a.createdAt)
}
