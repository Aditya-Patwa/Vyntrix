export type FieldType = "pubkey" | "u8" | "u16" | "u32" | "u64" | "i8" | "i16" | "i32" | "i64" | "string" | "bool"

export interface Field {
  id: string
  name: string
  type: FieldType | null
  isKey: boolean | null
}

export interface ITable {
  id: string
  name: string
  fields: Field[]
  editable: boolean
  deletable: boolean
}