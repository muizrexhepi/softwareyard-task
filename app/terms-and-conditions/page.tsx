import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Terms and Conditions
          </h1>
          <div className="space-y-4 text-gray-700">
            <p>
              By accessing or using our services, you agree to be bound by these
              Terms and Conditions.
            </p>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              Use of Services
            </h2>
            <p>
              You agree to use our services only for lawful purposes and in
              accordance with these Terms and Conditions.
            </p>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              Intellectual Property
            </h2>
            <p>
              The content, features, and functionality of our services are owned
              by us and are protected by international copyright, trademark,
              patent, trade secret, and other intellectual property laws.
            </p>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              Limitation of Liability
            </h2>
            <p>
              We shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of or
              inability to use our services.
            </p>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              Changes to Terms
            </h2>
            <p>
              We reserve the right to modify or replace these Terms and
              Conditions at any time. Your continued use of our services after
              any such changes constitutes your acceptance of the new Terms and
              Conditions.
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

export default TermsAndConditions;
