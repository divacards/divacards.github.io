import { XIcon } from "@heroicons/react/outline";

import { Transition, Popover } from "@headlessui/react";
export default function ({ open, children }) {
    return (
        <Transition
            show={open}
            as={Popover.Panel}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            //@ts-expect-error
            focus
            static
            className="fixed bottom-0 inset-x-0 transition transform origin-bottom lg:hidden z-20"
        >
            <div className="bg-black bg-opacity-50 divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 h-screen"></div>
            </div>
            <div className="bg-black bg-opacity-50 divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                        <div />
                        <div className="-mr-2">
                            <Popover.Button className="btn-popover-close">
                                <span className="sr-only">Close menu</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                {children}
            </div>
        </Transition>
    );
};