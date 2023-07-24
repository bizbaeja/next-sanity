import {createClient} from 'next-sanity';

export const client = createClient({
    projectId:"pv8dtf1v",
    dataset:"production",
    apiVersion:"2021-10-21",
    useCdn:true,
});