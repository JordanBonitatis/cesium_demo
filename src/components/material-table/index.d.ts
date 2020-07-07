import MaterialTable, { MaterialTableProps } from './MaterialTable';
import { Material } from './MaterialInterface';

declare module '@cesium/material-table';

export { Material, MaterialTableProps };

export default MaterialTable;
