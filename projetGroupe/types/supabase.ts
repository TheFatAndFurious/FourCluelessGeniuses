export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          categoryName: string | null
          created_at: string
          description: string | null
          id_categories: number
        }
        Insert: {
          categoryName?: string | null
          created_at?: string
          description?: string | null
          id_categories?: number
        }
        Update: {
          categoryName?: string | null
          created_at?: string
          description?: string | null
          id_categories?: number
        }
        Relationships: []
      }
      competence: {
        Row: {
          competence_name: string | null
          created_at: string
          description: string | null
          id_competence: number
          level: number | null
        }
        Insert: {
          competence_name?: string | null
          created_at?: string
          description?: string | null
          id_competence?: number
          level?: number | null
        }
        Update: {
          competence_name?: string | null
          created_at?: string
          description?: string | null
          id_competence?: number
          level?: number | null
        }
        Relationships: []
      }
      Cours: {
        Row: {
          created_at: string
          description: string | null
          id: number
          titre: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          titre?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          titre?: string | null
        }
        Relationships: []
      }
      cours_categories: {
        Row: {
          created_at: string
          id_categories: number | null
          id_cours: number | null
          id_cours_categories: number
        }
        Insert: {
          created_at?: string
          id_categories?: number | null
          id_cours?: number | null
          id_cours_categories?: number
        }
        Update: {
          created_at?: string
          id_categories?: number | null
          id_cours?: number | null
          id_cours_categories?: number
        }
        Relationships: [
          {
            foreignKeyName: "cours_categories_id_categories_fkey"
            columns: ["id_categories"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id_categories"]
          },
          {
            foreignKeyName: "cours_categories_id_cours_fkey"
            columns: ["id_cours"]
            isOneToOne: false
            referencedRelation: "course"
            referencedColumns: ["id_cours"]
          }
        ]
      }
      course: {
        Row: {
          created_at: string
          date_end: string | null
          date_start: string | null
          description: string | null
          id_cours: number
          title: string | null
        }
        Insert: {
          created_at?: string
          date_end?: string | null
          date_start?: string | null
          description?: string | null
          id_cours?: number
          title?: string | null
        }
        Update: {
          created_at?: string
          date_end?: string | null
          date_start?: string | null
          description?: string | null
          id_cours?: number
          title?: string | null
        }
        Relationships: []
      }
      diplome: {
        Row: {
          created_at: string
          id_diplome: number
          id_formation: number | null
          id_user: string | null
          name: string | null
          obtained: boolean | null
          obtained_on: string | null
        }
        Insert: {
          created_at?: string
          id_diplome?: number
          id_formation?: number | null
          id_user?: string | null
          name?: string | null
          obtained?: boolean | null
          obtained_on?: string | null
        }
        Update: {
          created_at?: string
          id_diplome?: number
          id_formation?: number | null
          id_user?: string | null
          name?: string | null
          obtained?: boolean | null
          obtained_on?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "diplome_id_formation_fkey"
            columns: ["id_formation"]
            isOneToOne: false
            referencedRelation: "formation"
            referencedColumns: ["id_formation"]
          },
          {
            foreignKeyName: "diplome_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      formation: {
        Row: {
          created_at: string
          description: string | null
          formationName: string | null
          id_formation: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          formationName?: string | null
          id_formation?: number
        }
        Update: {
          created_at?: string
          description?: string | null
          formationName?: string | null
          id_formation?: number
        }
        Relationships: []
      }
      session: {
        Row: {
          created_at: string
          end_session: string | null
          id_formation: number
          id_session: number
          name_session: string
          start_session: string | null
        }
        Insert: {
          created_at?: string
          end_session?: string | null
          id_formation: number
          id_session?: number
          name_session?: string
          start_session?: string | null
        }
        Update: {
          created_at?: string
          end_session?: string | null
          id_formation?: number
          id_session?: number
          name_session?: string
          start_session?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "session_id_formation_fkey"
            columns: ["id_formation"]
            isOneToOne: false
            referencedRelation: "formation"
            referencedColumns: ["id_formation"]
          }
        ]
      }
      user_competence: {
        Row: {
          created_at: string
          id_competence: number | null
          id_user: string | null
          id_user_competence: number
        }
        Insert: {
          created_at?: string
          id_competence?: number | null
          id_user?: string | null
          id_user_competence?: number
        }
        Update: {
          created_at?: string
          id_competence?: number | null
          id_user?: string | null
          id_user_competence?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_competence_id_competence_fkey"
            columns: ["id_competence"]
            isOneToOne: false
            referencedRelation: "competence"
            referencedColumns: ["id_competence"]
          },
          {
            foreignKeyName: "user_competence_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_favorite_cours: {
        Row: {
          created_at: string
          id: number
          id_cours: number | null
          id_user: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_cours?: number | null
          id_user?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_cours?: number | null
          id_user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_favorite_cours_id_cours_fkey"
            columns: ["id_cours"]
            isOneToOne: false
            referencedRelation: "course"
            referencedColumns: ["id_cours"]
          },
          {
            foreignKeyName: "user_favorite_cours_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_give_cours: {
        Row: {
          created_at: string
          id_give_cours: number
          id_user: string | null
          id_vours: number | null
          isAble: boolean | null
        }
        Insert: {
          created_at?: string
          id_give_cours?: number
          id_user?: string | null
          id_vours?: number | null
          isAble?: boolean | null
        }
        Update: {
          created_at?: string
          id_give_cours?: number
          id_user?: string | null
          id_vours?: number | null
          isAble?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "user_give_cours_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_give_cours_id_vours_fkey"
            columns: ["id_vours"]
            isOneToOne: false
            referencedRelation: "course"
            referencedColumns: ["id_cours"]
          }
        ]
      }
      user_session: {
        Row: {
          created_at: string
          id_session: number | null
          id_user: string | null
          id_user_session: number
        }
        Insert: {
          created_at?: string
          id_session?: number | null
          id_user?: string | null
          id_user_session?: number
        }
        Update: {
          created_at?: string
          id_session?: number | null
          id_user?: string | null
          id_user_session?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_session_id_session_fkey"
            columns: ["id_session"]
            isOneToOne: false
            referencedRelation: "session"
            referencedColumns: ["id_session"]
          },
          {
            foreignKeyName: "user_session_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
