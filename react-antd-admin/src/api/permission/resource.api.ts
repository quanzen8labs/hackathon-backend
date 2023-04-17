import type { GetPermissionListResult } from '@/interface/permission/permission.interface';

import { request } from '../request';

/** get role list api */
export const apiGetPermissionList = () => request<GetPermissionListResult>('get', '/permission/list');
