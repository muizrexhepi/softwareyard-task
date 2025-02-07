import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <div className="space-y-4 text-gray-700">
            <p>
              This Privacy Policy describes how we collect, use, and handle your
              personal information when you use our services.
            </p>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when
              you create an account, submit a form, or communicate with us.
            </p>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and
              improve our services, as well as to communicate with you.
            </p>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized or unlawful
              processing, accidental loss, destruction, or damage.
            </p>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
