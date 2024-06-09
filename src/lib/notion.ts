import { env } from "@/env";
import { Client } from "@notionhq/client";

const client = new Client({
  // a NOTION_ACCESS_TOKEN é uma variável de ambiente contendo
  // o integration Token do Notion
  // - se preferir pode puxar do sistema com process.env.NOTION_ACCESS_TOKEN
  auth: env.NOTION_ACCESS_TOKEN,
});
