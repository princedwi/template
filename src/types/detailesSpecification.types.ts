export interface DetailSpecification {
    id: number;
    attributes: {
      SpecQueryID: string;
      Query: string;
      isActive: boolean | null;
      Category1: string | null;
      Category2: string | null;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      MasterModelSpecID: {
        data: {
          id: number;
          attributes: {
            MasterModelSpecID: string;
            ModelSpec: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
          };
        };
      };
    };
  }
  export interface DetailSubSpecification {
    id: number;
    name:string,
    type:string,
    content:string[],
  }
  export interface Category {
    name: string;
    id: number; 
  }


  export interface DataItem {
    id: number;
    attributes: {
        MasterModelLogsQueryID: string;
        Query: string;
        isActive: boolean | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        MasterModelLogID: {
            data: {
                id: number;
                attributes: {
                    MasterModelLogID: string;
                    MasterLog: string;
                    createdAt: string;
                    updatedAt: string;
                    publishedAt: string;
                };
            };
        };
    };
}