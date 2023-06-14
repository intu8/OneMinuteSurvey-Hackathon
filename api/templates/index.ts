// Import polyfills for fetch required by msgraph-sdk-javascript.
import { Context, HttpRequest } from "@azure/functions";

interface Response {
  status: number;
  body: { [key: string]: any };
}

type TeamsfxContext = { [key: string]: any };

/**
 *
 * @param {Context} context - The Azure Functions context object.
 * @param {HttpRequest} req - The HTTP request.
 * @param {teamsfxContext} TeamsfxContext - The context generated by teamsfx binding.
 */
export default async function run(
  context: Context,
  req: HttpRequest,
  teamsfxContext: TeamsfxContext
): Promise<Response> {
  context.log(req.method + " - " + req.url);

  let topics = [
    {
      id: 1,
      topic: "Staff Pulse Survey",
      questions: [1, 2, 3],
    },
    // {
    //   id: 1,
    //   topic: "I want to understand our P3M abilities, and explore how we might improve.",
    //   questions: [1, 2, 3, 4, 5, 6, 7, 8],
    // },
  ];
  
  const res: Response = {
    status: 200,
    body: topics,
  };

  return res;
}