export interface Permission {
  id: number;
  name: string;
  resource: string;
  isAllowed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type GetPermissionListResult = Permission[];
