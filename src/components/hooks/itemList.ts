import { ApiService } from "@/services";
import { useAccountStore } from "@/store/useStore";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getKeyIcon } from "@/models/dynamic";

export const use_FetchRoutes = () => {

    const [loadedData, setLoadedData] = useState<any>();
    const {account} = useAccountStore();
    const {isError, isFetched, data, isLoading, error} = useQuery<any>('routes', async () => await ApiService.get("menus/routes", 
        {headers: {"Authorization": `Bearer ${account}`}}));


    // TO MODIFY DATA AND MAKE IT SUITABLE FOR THE MENU
    
    useEffect(() => {
        const modifyData = () => {
            const modified = data.data.payload.map((menu: any) => {
    
                const children = menu.subMenus;
    
                if(children.length == 0){
                    return {
                        label: menu.mencap,
                        path: `/${menu.menprg}`,
                        icon: getKeyIcon("DashboardIcon")
                    }
                }
    
                const mappedChildren = children.map((men: any) => {
                    return {
                        label: men.mencap,
                        path: `/${menu.menprg}/${men.menprg}`
                    }
                });
    
                return {
                    label: menu.mencap,
                    path: `/${menu.menprg}`,
                    icon: getKeyIcon("DashboardIcon"),
                    items: mappedChildren
                }
            })
    
            setLoadedData(modified);
        }

        if(data){
            console.log(data);
            modifyData();
        }
    }, [data, error]);

    return {isError, isFetched, isLoading, error: error as any, account, data: loadedData}
}

export const use_MouseHandles = () => {

    const [open, setOpen] = useState<string | null>(null);
    const [openSecondLevel, setOpenSecondLevel] = useState<string | null>(null);

    const handleClick = (item: string) => {
        setOpen(open === item ? null : item);
    };

    const handleMouseLeave = () => {
        setOpen(null);
        setOpenSecondLevel(null);
    };

    const handleClickSecondLevel = (item: string) => {
        setOpenSecondLevel(openSecondLevel === item ? null : item);
    };
  
      
    
    return {handleClick, handleMouseLeave, handleClickSecondLevel, open, openSecondLevel}
}