import axios from "axios";
import { User } from "@/lib/models";

const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
const audience = process.env.NEXT_PUBLIC_AUDIENCE;

const data = {
  client_id,
  client_secret,
  audience: `${audience}/api/v2/`,
  grant_type: "client_credentials",
};

async function getAuth0ManagementApiToken() {
  try {
    const res = await axios.post(`${audience}/oauth/token`, data);
    return res.data.access_token;
  } catch (error: any) {
    console.log(`error`, error.message);
  }
}

const userQueryResolver = {
  user: async (_: any, args: { id: string }) => {
    const { id } = args;
    const token = await getAuth0ManagementApiToken();
    const resp = await axios.get(`${audience}/api/v2/users/` + id, {
      headers: {
        Authorization: `Bearer ` + token,
      },
    });

    return await resp.data;
  },
};

const userMutationResolver = {
  saveUser: async (_: any, args: { user: Partial<User> }) => {
    return {};
  },
};

export { userQueryResolver, userMutationResolver };
