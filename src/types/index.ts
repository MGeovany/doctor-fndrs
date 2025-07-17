export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  image: string;
  isOnline: boolean;
  patientsAttended: number;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  consultation: string;
  waitTime: string;
  status: "waiting" | "assigned" | "in-consultation" | "completed";
  assignedDoctorId?: string;
  priority: "low" | "medium" | "high";
  avatar: string;
}

export interface Consultation {
  id: string;
  patientId: string;
  doctorId: string;
  status: "pending" | "in-progress" | "completed";
  startTime: Date;
  endTime?: Date;
  notes?: string;
}

export interface AppState {
  currentDoctor: Doctor | null;
  patients: Patient[];
  doctors: Doctor[];
  consultations: Consultation[];
  isAuthenticated: boolean;
}

export interface AppContextType extends AppState {
  login: (username: string, password: string) => boolean;
  logout: () => void;
  assignPatient: (patientId: string, doctorId: string) => void;
  updatePatientStatus: (patientId: string, status: Patient["status"]) => void;
  startConsultation: (patientId: string) => void;
  completeConsultation: (patientId: string, notes?: string) => void;
}
