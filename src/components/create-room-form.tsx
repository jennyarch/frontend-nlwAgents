import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function CreateRoomForm(){
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Criar sala
                </CardTitle>
                <CardDescription>
                    Crie uma nova sala oara começar a fazer perguntas e receber rspostas da I.A.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-4">

                </form>
            </CardContent>
        </Card>
    )
}