import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center">
      <div className="container-site text-center">
        <div className="label-mono mb-4 text-acid">404</div>
        <h1 className="display text-6xl text-bone sm:text-8xl">Off the record</h1>
        <p className="mx-auto mt-4 max-w-md text-bone-muted">
          That track isn&apos;t in the crate. Let&apos;s get you back to the floor.
        </p>
        <Link href="/" className="btn-acid mt-8">Back home</Link>
      </div>
    </section>
  );
}
