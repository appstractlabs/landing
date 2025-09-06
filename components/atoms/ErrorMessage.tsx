import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function ErrorMessage({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <div className="flex items-start space-x-3">
                <ExclamationCircleIcon className="size-5 text-red-500 flex-shrink-0" />
                <div className="flex-1">
                    <h4 className="text-sm font-medium text-red-800 dark:text-red-200">
                        { children }
                    </h4>
                </div> 
            </div>
        </div>
    );
}
