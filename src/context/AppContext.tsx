"use client";

import React, { createContext, useContext, useReducer } from "react";
import type { AppContextType, AppState, Patient, Doctor } from "@/types";
import { mockDoctors, mockPatients, defaultDoctor } from "@/data/mockData";

const initialState: AppState = {
  currentDoctor: null,
  patients: mockPatients,
  doctors: mockDoctors,
  consultations: [],
  isAuthenticated: false,
};

type AppAction =
  | { type: "LOGIN"; payload: Doctor }
  | { type: "LOGOUT" }
  | { type: "ASSIGN_PATIENT"; payload: { patientId: string; doctorId: string } }
  | {
      type: "UPDATE_PATIENT_STATUS";
      payload: { patientId: string; status: Patient["status"] };
    }
  | { type: "START_CONSULTATION"; payload: string }
  | {
      type: "COMPLETE_CONSULTATION";
      payload: { patientId: string; notes?: string };
    };

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        currentDoctor: action.payload,
        isAuthenticated: true,
      };

    case "LOGOUT":
      return {
        ...state,
        currentDoctor: null,
        isAuthenticated: false,
      };

    case "ASSIGN_PATIENT":
      return {
        ...state,
        patients: state.patients.map((patient) =>
          patient.id === action.payload.patientId
            ? {
                ...patient,
                status: "assigned",
                assignedDoctorId: action.payload.doctorId,
              }
            : patient,
        ),
      };

    case "UPDATE_PATIENT_STATUS":
      return {
        ...state,
        patients: state.patients.map((patient) =>
          patient.id === action.payload.patientId
            ? { ...patient, status: action.payload.status }
            : patient,
        ),
      };

    case "START_CONSULTATION":
      return {
        ...state,
        patients: state.patients.map((patient) =>
          patient.id === action.payload
            ? { ...patient, status: "in-consultation" }
            : patient,
        ),
      };

    case "COMPLETE_CONSULTATION":
      return {
        ...state,
        patients: state.patients.map((patient) =>
          patient.id === action.payload.patientId
            ? { ...patient, status: "completed" }
            : patient,
        ),
        currentDoctor: state.currentDoctor
          ? {
              ...state.currentDoctor,
              patientsAttended: state.currentDoctor.patientsAttended + 1,
            }
          : null,
      };

    default:
      return state;
  }
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const contextValue: AppContextType = {
    ...state,
    login: (username: string, password: string) => {
      if (username === "doctor" && password === "doctor123") {
        dispatch({ type: "LOGIN", payload: defaultDoctor });
        return true;
      }
      return false;
    },
    logout: () => dispatch({ type: "LOGOUT" }),
    assignPatient: (patientId: string, doctorId: string) => {
      dispatch({ type: "ASSIGN_PATIENT", payload: { patientId, doctorId } });
    },
    updatePatientStatus: (patientId: string, status: Patient["status"]) => {
      dispatch({
        type: "UPDATE_PATIENT_STATUS",
        payload: { patientId, status },
      });
    },
    startConsultation: (patientId: string) => {
      dispatch({ type: "START_CONSULTATION", payload: patientId });
    },
    completeConsultation: (patientId: string, notes?: string) => {
      dispatch({
        type: "COMPLETE_CONSULTATION",
        payload: { patientId, notes },
      });
    },
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
