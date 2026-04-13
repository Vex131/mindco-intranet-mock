import {redirect} from "next/navigation";
import {messageThreads} from "@/lib/mockData";

export default function MessagesPage() {
  redirect(`/messages/${messageThreads[0].slug}`);
}
