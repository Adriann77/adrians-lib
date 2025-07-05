import Link from 'next/link';

export default function ShadcnPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'>
      <div className='container mx-auto px-4 py-16'>
        <div className='mb-8'>
          <Link
            href='/'
            className='inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'
          >
            <svg
              className='w-5 h-5 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-gray-900 dark:text-white mb-4'>
            shadcn/ui Components
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Beautifully designed components that you can copy and paste into
            your apps. Built with Radix UI and Tailwind CSS.
          </p>
        </div>

        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-4'>
            Getting Started
          </h2>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>
            To get started with shadcn/ui, you need to install the CLI and
            initialize your project:
          </p>
          <div className='bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4'>
            <code className='text-sm text-gray-800 dark:text-gray-200'>
              npx shadcn@latest init
            </code>
          </div>
          <p className='text-gray-600 dark:text-gray-300'>
            Then you can add components to your project:
          </p>
          <div className='bg-gray-100 dark:bg-gray-700 rounded-lg p-4'>
            <code className='text-sm text-gray-800 dark:text-gray-200'>
              npx shadcn@latest add button
            </code>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Button
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Displays a button or a component that looks like a button.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Example:
                </div>
                <div className='text-sm font-mono text-gray-800 dark:text-gray-200'>
                  &lt;Button
                  variant=&quot;default&quot;&gt;Button&lt;/Button&gt;
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Input
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Displays a form input field or a component that looks like an
              input field.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Example:
                </div>
                <div className='text-sm font-mono text-gray-800 dark:text-gray-200'>
                  &lt;Input type=&quot;email&quot; placeholder=&quot;Email&quot;
                  /&gt;
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Card
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Displays a card with header, content, and footer.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Example:
                </div>
                <div className='text-sm font-mono text-gray-800 dark:text-gray-200'>
                  &lt;Card&gt;&lt;CardHeader&gt;...&lt;/CardHeader&gt;&lt;/Card&gt;
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Dialog
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              A window overlaid on either the primary window or another dialog
              window.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Example:
                </div>
                <div className='text-sm font-mono text-gray-800 dark:text-gray-200'>
                  &lt;Dialog&gt;&lt;DialogTrigger&gt;...&lt;/DialogTrigger&gt;&lt;/Dialog&gt;
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Table
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              A responsive table component with sorting and filtering
              capabilities.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Example:
                </div>
                <div className='text-sm font-mono text-gray-800 dark:text-gray-200'>
                  &lt;Table&gt;&lt;TableHeader&gt;...&lt;/TableHeader&gt;&lt;/Table&gt;
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Form
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Building forms with React Hook Form and Zod validation.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Example:
                </div>
                <div className='text-sm font-mono text-gray-800 dark:text-gray-200'>
                  &lt;Form&gt;&lt;FormField&gt;...&lt;/FormField&gt;&lt;/Form&gt;
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 text-center'>
          <p className='text-gray-600 dark:text-gray-400 mb-4'>
            Ready to start building with shadcn/ui?
          </p>
          <a
            href='https://ui.shadcn.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-6 py-3 bg-black hover:bg-gray-800 text-white font-medium rounded-lg transition-colors'
          >
            Visit shadcn/ui Documentation
            <svg
              className='w-5 h-5 ml-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
