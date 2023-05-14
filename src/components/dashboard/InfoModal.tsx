function InfoModal({ title }: { title: string }) {
  return (
    <div className="font-[400] text-neutral-700 text-sm p-[8px] text-center content-center bg-neutral-400 rounded-[4px] w-[268px] h-[48px]">
      {title}
    </div>
  );
}

export default InfoModal;
